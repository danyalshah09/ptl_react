/**
 * Critical CSS for above-the-fold content
 * This CSS will be inlined in the head to eliminate render-blocking CSS
 */

export const criticalCSS = `
/* Critical styles for immediate rendering */
:root {
  --primary-font: "Alegreya";
  --color: #333;
}

body {
  font-family: var(--primary-font), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  line-height: 1.5;
  color: var(--color);
}

.h-screen {
  height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rounded-full {
  border-radius: 9999px;
}

.h-12 {
  height: 3rem;
}

.w-12 {
  width: 3rem;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-gray-900 {
  border-color: #1a202c;
}

.text-center {
  text-align: center;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.mt-4 {
  margin-top: 1rem;
}
`;

/**
 * Function to add critical CSS to the document head
 */
export const injectCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = criticalCSS;
    document.head.appendChild(style);
  }
};

export default injectCriticalCSS; 