// This fixes a problem with the wrapTextWithEllipses function in britecharts
// using getComputedTextLength and not being available because of jsdom.
// More info in https://github.com/eventbrite/britecharts-react/pull/65#issuecomment-348726423
window.Element.prototype.getComputedTextLength = () => 200;
