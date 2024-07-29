let lastDeps;
let cu;

function useEffect(cb, deps) {
  setTimeout(() => {
    if (!deps || !lastDeps) {
      cu = cb();
      return;
    }

    if (compare(lastDeps, deps)) {
      return;
    }

    cu();
    cu = cb();
  }, 0);
}

useEffect(() => {
  console.log("cb");

  return () => console.log("cu");
});
