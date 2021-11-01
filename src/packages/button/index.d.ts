import { App } from 'vue'

export declare class UIComponent {
  static install(vue: App): void
}

export declare class Button extends UIComponent {
  type: 'primary' | 'danger' | 'warning' | 'success' | 'info'

  size: 'small' | 'large' | 'medium'
}
