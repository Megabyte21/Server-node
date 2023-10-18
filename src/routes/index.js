/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express'

import root from './root'

const router = Router()

router.use(root)

export default router
