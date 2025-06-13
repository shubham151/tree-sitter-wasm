import { Parser, Language, Query } from "web-tree-sitter";

async function main() {
  await Parser.init({
    locateFile() {
      return "/tree-sitter.wasm";
    },
  });

  const parser = new Parser();
  const TypeScript = await Language.load("/static/tree-sitter-typescript.wasm");
  parser.setLanguage(TypeScript);

  const code = `import { Format } from '../core/Format'
import type { change, line, state } from '../../../types'

function getUpdatedLine(line: line, content: string): line {
  const id = line.id
  const formatted = Format.get(content)
  const length = content.length
  return { id, content, formatted, length }
}

function getNewLine(nextLineId: number, content: string = ''): line {
  const id = nextLineId
  const formatted = Format.get(content)
  const length = content.length
  return { id, content, formatted, length }
}

function insert(state: state, char: string): change {
  const { lines, cursor } = state
  const line = lines[cursor.row]
  const before = line.content.slice(0, cursor.col)
  const after = line.content.slice(cursor.col)
  const content = before + char + after
  lines[cursor.row] = getUpdatedLine(line, content)
  const { row } = cursor
  const col = cursor.col + 1
  const change = {
    lines,
    cursor: { row, col }
  }
  return change
}

function insertNewLine(state: state): change {
  const { lines, cursor } = state
  const line = lines[cursor.row]
  const before = line.content.slice(0, cursor.col)
  lines[cursor.row] = getUpdatedLine(line, before)
  const after = line.content.slice(cursor.col)
  const newLine = getNewLine(state.nextLineId, after)
  lines.splice(cursor.row + 1, 0, newLine)
  const row = cursor.row + 1
  const col = 0
  const nextLineId = newLine.id + 1
  const change = {
    lines,
    cursor: { row, col },
    nextLineId
  }
  return change
}

function newLine(state: state): change {
  const { lines, cursor } = state
  const newLine = getNewLine(state.nextLineId)
  lines.splice(cursor.row + 1, 0, newLine)
  const row = cursor.row + 1
  const col = 0
  const nextLineId = newLine.id + 1
  const change = {
    lines,
    cursor: { row, col },
    nextLineId
  }
  return change
}

function backspace(state: state): change {
  const { lines, cursor } = state
  if (cursor.col > 0) {
    const line = lines[cursor.row]
    const content = line.content.slice(0, cursor.col - 1) + line.content.slice(cursor.col)
    lines[cursor.row] = getUpdatedLine(line, content)
    const { row } = cursor
    const col = cursor.col - 1
    const change = {
      lines,
      cursor: { row, col }
    }
    return change
  } else if (cursor.row > 0) {
    const previousLine = lines[cursor.row - 1]
    const currentLine = lines[cursor.row]
    const content = previousLine.content + currentLine.content
    lines[cursor.row - 1] = getUpdatedLine(previousLine, content)
    lines.splice(cursor.row, 1)
    const row = cursor.row - 1
    const col = previousLine.length
    const change = {
      lines,
      cursor: { row, col }
    }
    return change
  }
}

function deleteCharacter(state: state): change {
  const { lines, cursor } = state
  const line = lines[cursor.row]
  const content = line.content.slice(0, cursor.col) + line.content.slice(cursor.col + 1)
  lines[cursor.row] = getUpdatedLine(line, content)
  return { lines }
}

function deleteLine(state: state): change {
  const { lines, cursor } = state
  lines.splice(cursor.row, 1)
  return { lines }
}

function copyLine(state: state): change {
  const { lines, cursor } = state
  const line = lines[cursor.row]
  const clipboard = line.content
  return { clipboard }
}

function pasteLine(state: state): change {
  const { lines, cursor, clipboard } = state
  const newLine = getNewLine(state.nextLineId, clipboard)
  lines.splice(cursor.row + 1, 0, newLine)
  const row = cursor.row + 1
  const { col } = cursor
  const nextLineId = newLine.id + 1
  return {
    lines,
    cursor: { row, col },
    nextLineId
  }
}

export const Edit = {
  insert,
  insertNewLine,
  newLine,
  backspace,
  deleteCharacter,
  deleteLine,
  copyLine,
  pasteLine
}
`;
  const tree = parser.parse(code);

  const queryRes = await fetch("/static/queries/highlights.scm");
  const queryText = await queryRes.text();
  const query = new Query(TypeScript, queryText);

  const captures = query.captures(tree.rootNode);
  console.time("highlight");
  const html = highlightWithQuery(code, captures);
  // console.log(html);
  console.timeEnd("highlight");
  document.getElementById("tree-output").innerHTML = html;
}

function highlightWithQuery(code, captures) {
  captures.sort((a, b) => {
    if (a.node.startIndex !== b.node.startIndex) {
      return a.node.startIndex - b.node.startIndex;
    }
    return b.node.endIndex - a.node.endIndex;
  });

  let result = "";
  let pos = 0;
  let skipUntil = 0;

  for (const { node, name } of captures) {
    if (node.endIndex <= skipUntil) {
      continue;
    }

    if (node.startIndex > pos) {
      result += escapeHTML(code.slice(pos, node.startIndex));
    }
    const cssClassList = name.split(".").join(" ");
    result += `<span class="${cssClassList}">${escapeHTML(
      code.slice(node.startIndex, node.endIndex),
    )}</span>`;

    pos = node.endIndex;
    skipUntil = pos;
  }

  if (pos < code.length) {
    result += escapeHTML(code.slice(pos));
  }

  return result;
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

window.addEventListener("DOMContentLoaded", main);
