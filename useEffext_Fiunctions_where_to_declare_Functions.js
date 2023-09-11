In React, you can declare functions that youre going to use in the useEffect hook in two places:

Inside the useEffect Hook: You can declare the function directly inside the useEffect hook. This is useful if the function is only relevant to the effect and nowhere else in the component.
useEffect(() => {
  function fetchData() {
    // Fetch data here
  }

  fetchData();
}, [/* dependencies */]);
Outside the useEffect Hook but Inside the Component Function: If the function is also used elsewhere in the component, or if it doesn't use any props or state so it doesn't need to be recreated on every render, you can declare it outside the useEffect hook but still inside the component function.
function MyComponent() {
  function fetchData() {
    // Fetch data here
  }

  useEffect(() => {
    fetchData();
  }, [/* dependencies */]);

  // You can also use fetchData elsewhere in the component
}
In both cases, remember to add any dependencies that your function uses to the dependency array of the useEffect hook. If you don't, your effect might use stale data from a previous render. smashingmagazine.com

Also, avoid declaring functions inside conditional statements before using them in useEffect. This can cause bugs because React relies on the order of Hook calls being the same between renders. If a Hook call is sometimes skipped due to a condition, React won't know what to return for the other Hook calls. Instead, put the condition inside the useEffect hook or the function you're calling. legacy.reactjs.org

// Don't do this
if (condition) {
  useEffect(() => {
    // Code here
  });
}

// Do this
useEffect(() => {
  if (condition) {
    // Code here
  }
});
