export const uniqueArray = (array) => {
  const results = array?.filter((thing, index) => {
    const _thing = JSON.stringify(thing);
    return (
      index ===
      array.findIndex((obj) => {
        return JSON.stringify(obj) === _thing;
      })
    );
  });

  return results;
};
