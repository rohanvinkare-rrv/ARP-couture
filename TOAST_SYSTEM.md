# Toast Notification System

A professional, themed toast notification system that replaces default browser alerts.

## Features

- ✅ **4 Toast Types**: Success, Error, Warning, Info
- ✅ **Glassmorphic Design**: Matches the application theme perfectly
- ✅ **Auto-dismiss**: Configurable duration (default 4 seconds)
- ✅ **Smooth Animations**: Slide-in from right with fade
- ✅ **Manual Close**: X button to dismiss immediately
- ✅ **Easy Integration**: Simple hook-based API

## Usage

### Basic Example

```javascript
import { useToast } from './contexts/ToastContext';

function MyComponent() {
  const toast = useToast();

  const handleSave = () => {
    // Show success toast
    toast.success('Data saved successfully!');
  };

  const handleError = () => {
    // Show error toast
    toast.error('Failed to save data');
  };

  const handleWarning = () => {
    // Show warning toast
    toast.warning('Unsaved changes detected');
  };

  const handleInfo = () => {
    // Show info toast
    toast.info('New version available');
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleError}>Trigger Error</button>
      <button onClick={handleWarning}>Show Warning</button>
      <button onClick={handleInfo}>Show Info</button>
    </div>
  );
}
```

### Custom Duration

```javascript
// Default duration is 4000ms (4 seconds)
toast.success('Quick message', 2000); // 2 seconds

// Disable auto-dismiss
toast.error('Manual dismiss only', 0);
```

## Toast Types

### Success
- **Color**: Lime Green
- **Icon**: Check Circle
- **Use**: Confirm successful operations

### Error
- **Color**: Electric Red
- **Icon**: Error Circle
- **Use**: Alert users to failures

### Warning
- **Color**: Deep Orange
- **Icon**: Warning Triangle
- **Use**: Caution about potential issues

### Info
- **Color**: Primary Text
- **Icon**: Info Circle
- **Use**: General information

## Demo

Visit the `/toast-demo` page (ToastDemo.jsx) to see all toast types in action and test the system.

## Implementation Details

### Files Created
- `src/contexts/ToastContext.jsx` - Toast provider and hook
- `src/pages/ToastDemo.jsx` - Demo page
- `src/index.css` - Animation styles

### Integration
The ToastProvider is integrated at the app root level in `App.jsx`, making the toast system available throughout the entire application.

## Design

The toast notifications use:
- Glassmorphic background with backdrop blur
- Theme-consistent colors and borders
- Smooth slide-in animation from the right
- Fixed positioning in top-right corner
- Responsive sizing (min-width: 320px, max-width: 28rem)
