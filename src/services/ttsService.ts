export type TTSState = 'idle' | 'loading' | 'playing' | 'paused';

class TTSService {
  private state: TTSState = 'idle';
  private currentText: string = '';
  private listeners: ((state: TTSState, text: string) => void)[] = [];
  private timeoutId: any = null;

  subscribe(listener: (state: TTSState, text: string) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.state, this.currentText));
  }

  async play(text: string) {
    this.stop();
    this.currentText = text;
    this.state = 'loading';
    this.notify();

    // Simulate network request to proxy
    await new Promise(resolve => setTimeout(resolve, 400));

    this.state = 'playing';
    this.notify();

    // Simulate playing duration based on text length
    const duration = Math.max(2000, text.length * 180);
    this.timeoutId = setTimeout(() => {
      this.state = 'idle';
      this.notify();
    }, duration);
  }

  stop() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.state = 'idle';
    this.notify();
  }
}

export const ttsService = new TTSService();
