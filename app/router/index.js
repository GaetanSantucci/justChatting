// Import router
import { Router } from 'express';
const router = Router();

// ~ import method
import { renderHomepage, setPseudo  } from '../controller/homepage.js';
import { renderChatPage } from '../controller/chat.js';
import { validationBody } from '../service/validation.js';
import { nameSchema } from '../schema/name.schema.js';
import { auth } from '../middleware/authentification.js'


router.get('/', renderHomepage);
router.get('/chat', auth, renderChatPage);

router.post('/pseudo', validationBody(nameSchema), setPseudo);
//~ Export router
export { router };