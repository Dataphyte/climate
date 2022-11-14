const trimmer = (text = '') => {
  if (typeof text !== 'string')
    return console.log(`trimmer expected string but got ${typeof text}`);

  return [text.slice(0, 100), '...'].join('');
};

export default trimmer;
