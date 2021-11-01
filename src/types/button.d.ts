import { UIComponent } from './component'

export declare class Button extends UIComponent {
  type: 'primary' | 'danger' | 'warning' | 'success' | 'info'

  size: 'small' | 'large' | 'medium'
}
