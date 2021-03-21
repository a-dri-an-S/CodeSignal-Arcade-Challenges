// 56. Given the starting HTML tag, find the appropriate end tag which your editor should propose.

function htmlEndTagByStartTag(startTag) {
    let tag = startTag.match(/\w+/g);
    return `</${tag[0]}>`;
}
