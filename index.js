import React from 'react'

export class NovaErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('NovaErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Handled by NovaErrorBoundary.</h2>
    }
    return this.props.children
  }
}
