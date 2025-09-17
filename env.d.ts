/// <reference types="vite/client" />

declare module 'ogl' {
  export class Camera {
    constructor(gl: WebGLRenderingContext, options?: any);
    position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    matrix: Float32Array;
    viewMatrix: Float32Array;
    projectionMatrix: Float32Array;
    fov: number;
    aspect: number;
    near: number;
    far: number;
    updateMatrixWorld(): void;
    perspective(options?: { fov?: number; aspect?: number; near?: number; far?: number }): void;
  }

  export class Mesh {
    constructor(gl: WebGLRenderingContext, options?: any);
    geometry: any;
    program: Program;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    matrix: Float32Array;
    parent: any;
    children: any[];
    updateMatrixWorld(): void;
    draw(): void;
    setParent(parent: any): void;
  }

  export class Plane {
    constructor(gl: WebGLRenderingContext, options?: any);
    attributes: any;
    indices: Uint16Array;
  }

  export class Program {
    constructor(gl: WebGLRenderingContext, options?: any);
    vertex: string;
    fragment: string;
    uniforms: any;
    attributes: any;
    use(): void;
  }

  export class Renderer {
    constructor(options?: any);
    gl: WebGLRenderingContext;
    canvas: HTMLCanvasElement | OffscreenCanvas;
    setSize(width: number, height: number): void;
    render(scene: any, camera: any): void;
  }

  export class Texture {
    constructor(gl: WebGLRenderingContext, options?: any);
    image: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
    width: number;
    height: number;
    update(): void;
  }

  export class Transform {
    constructor();
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    matrix: Float32Array;
    updateMatrixWorld(): void;
  }
}
