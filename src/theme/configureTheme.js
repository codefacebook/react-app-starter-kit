import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';

export default function configureTheme() {
  return createMuiTheme({
    palette: {
      primary: {
        ...red,
        '500': '#D32F2F'
      }
    }
  });
}
