import styled, { createGlobalStyle } from "styled-components";
import NotionSprite from "./assets/notion-sprite.png";

export const BaseStyles = createGlobalStyle`
  * {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
  }
  
  body {
    height: 100vh;
  }

  #root {
    height: 100%;
  }
`;

export const StyledMain = styled.main`
  position: relative;
  display: flex;
  height: 100%;
`;

export function createIconsClasses() {
  const iconWidth = 66;
  const iconHeight = 66;
  let iconsClasses = "";
  let numberClass = 1;

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      console.log(numberClass);
      iconsClasses += `
            .icon-${numberClass} {
                display: inline-block;
                width: ${iconWidth}px;
                height: ${iconHeight}px;
                background: url(${NotionSprite}) -${iconWidth * i}px -${iconHeight * j}px no-repeat;
            }
        `;
      numberClass++;
    }
  }

  return iconsClasses;
}

export const IconsClasses = styled.i`
  ${createIconsClasses()};
`;
