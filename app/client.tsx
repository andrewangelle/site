// app/client.tsx
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'
import './styles/index.css'
import { writeStylesToHead } from './styles/writeStyles'

const router = createRouter()

writeStylesToHead();
hydrateRoot(document, <StartClient router={router} />)

export default router