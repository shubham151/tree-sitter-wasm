import { Format } from './Format'
import type { editorChange, line, state } from '../../../types'

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

function insert(state: state, char: string): editorChange {
  const { lines, cursor } = state.editor
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

function insertNewLine(state: state): editorChange {
  const { lines, cursor } = state.editor
  const line = lines[cursor.row]
  const before = line.content.slice(0, cursor.col)
  lines[cursor.row] = getUpdatedLine(line, before)
  const after = line.content.slice(cursor.col)
  const newLine = getNewLine(state.editor.nextLineId, after)
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

function newLine(state: state): editorChange {
  const { lines, cursor } = state.editor
  const newLine = getNewLine(state.editor.nextLineId)
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

function backspace(state: state): editorChange {
  const { lines, cursor } = state.editor
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

function deleteCharacter(state: state): editorChange {
  const { lines, cursor } = state.editor
  const line = lines[cursor.row]
  const content = line.content.slice(0, cursor.col) + line.content.slice(cursor.col + 1)
  lines[cursor.row] = getUpdatedLine(line, content)
  return { lines }
}

function deleteLine(state: state): editorChange {
  const { lines, cursor } = state.editor
  lines.splice(cursor.row, 1)
  return { lines }
}

function copyLine(state: state): editorChange {
  const { lines, cursor } = state.editor
  const line = lines[cursor.row]
  const clipboard = line.content
  return { clipboard }
}

function pasteLine(state: state): editorChange {
  const { lines, cursor, clipboard } = state.editor
  const newLine = getNewLine(state.editor.nextLineId, clipboard)
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
