import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'import App from './App.tsx'
import './clases/array.ts'
import './clases/string.tsx'
import './clases/objetos.ts'
import './clases/funciones.ts'
import './clases/nose.ts'
import './clases/import.ts'
import './Bancos.tsx'
import Bancos from './Bancos.tsx'
import './BancosIA.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Bancos></Bancos>
  </StrictMode>,
)
