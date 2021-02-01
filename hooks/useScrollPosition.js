import {useState, useRef, useEffect} from 'react';

function useScrollPostion() {
  const [scrollPos, setScrollPos] = useState(0);
  const oldScrollPos = useRef(0);

  useEffect(() => {
    function onScroll() {
      setScrollPos(window.pageYOffset)
      oldScrollPos.current = window.pageYOffset
    };
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  const difference = scrollPos - oldScrollPos.current

  const positions = {
    difference: difference,
    currentPosition: scrollPos,
    previousPosition: oldScrollPos.current
  }
  
  return positions
}

export default useScrollPostion;

