import { processColor } from 'react-native';

function generateNamedColors(quantity: number) {
    const colorNames = [
      'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'cyan',
      'magenta', 'lime', 'indigo', 'violet', 'gold', 'silver', 'black', 'white', 'teal', 'navy',
    ];

    const colors = [];
    for (let i = 0; i < quantity; i++) {
      colors.push(processColor(colorNames[i]));
    }

    return colors;
  }

  export { generateNamedColors };
