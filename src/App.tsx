import { MyBox } from "./componentes/Box";
import { MyButton } from "./componentes/Button";
import { MyButtonGroup } from "./componentes/ButtonGroup";
import { MyCheckBox } from "./componentes/CheckBox";
import { MyContainerLayout } from "./componentes/Container";
import { MyRadioButton } from "./componentes/RadioButton";
import { MySelect } from "./componentes/Select";
import { MySlider } from "./componentes/Slider";
import { MySwitch } from "./componentes/Switch";
import { MyTextField } from "./componentes/TextField";
// import { TypographyText } from "./componentes/Typographyheading";

function App() {


  return (
    <>
      {/* <TypographyText /> */}
      <MyButton />
      <MyButtonGroup />
      <MyCheckBox />
      <MyRadioButton />
      <MySlider />
      <MySelect />
      <MyTextField />
      <MySwitch />
      <MyBox />
      <MyContainerLayout />
    </>
  )
}

export default App
