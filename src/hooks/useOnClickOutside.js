import {useEffect, useRef } from "react";

export const useOnClickOutside = (el, cb) => {
    useEffect(() => {
        const func = (e) => {
            // if (!e.target.contains(el.current)) {
            if (!el.current.contains(e.target)) {
                cb();
                console.log('CB')
            }
        };

        document.addEventListener('click', func);
        return () => {
            document.removeEventListener('click', func);
        };
    }, [el, cb]);
};


