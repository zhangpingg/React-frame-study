import React, { useMemo } from "react";

export const useLink = () => {
  const link = useMemo(() => {
    return {
      newPath: (href:string) => {
        window.open(href, '_blank');
      },
      push: (href:string) => {
        window.open(href);
      }
    }
  }, [])
  return link
}
