// app/client.tsx
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'
import './styles/index.css'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)

export default router