import React, {useEffect, useRef, useCallback, useState} from 'react';

export function useEventListener(eventName:string, handler:Function, element:HTMLElement|Document) {
  const savedHandler = useRef<Function>();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
      () => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        const eventListener = (event:any) => savedHandler.current?.call(null, event);

        element.addEventListener(eventName, eventListener, false);
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
  );
};