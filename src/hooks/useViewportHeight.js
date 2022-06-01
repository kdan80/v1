import React from "react";

const useViewportHeight = () => {

    const [viewportHeight, setViewportHeight] = React.useState();

    React.useEffect(() => {
        setViewportHeight(window.innerHeight);
        // This function is debounced to prevent excessive function calls
        const handleWindowResize = cb => {
            let timer;
            return () => {
                if(timer) clearTimeout(timer);
                timer = setTimeout(cb,100);
            };
        };

        window.addEventListener("resize", handleWindowResize(
            () => setViewportHeight(window.innerHeight)
        ));

        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return viewportHeight;
}

export default useViewportHeight;
