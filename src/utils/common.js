
function extractYear(date){
  return new Date(date).toLocaleDateString( 'en-gb', { year: 'numeric' })
};

function extractMonthYear(date){
  return new Date(date).toLocaleDateString( 'en-gb', { month: 'short', year: 'numeric' })
}

function isMobileViewport(width) {
  return width < 600
}

export { extractYear, extractMonthYear, isMobileViewport };
