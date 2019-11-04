const getUrlParam = param => {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
};

const other = () => true;

export { getUrlParam, other };
