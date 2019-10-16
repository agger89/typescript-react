// https://www.styled-components.com/docs/api#typescript
// styled-components typescript
import "styled-components";

declare module "styled-components" {
  // DefaultTheme는 기본적으로 props.theme 의 인터페이스로 사용
  export interface DefaultTheme {
    blueColor: string;
  }
}