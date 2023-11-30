import { z } from 'zod';
import { Card } from '@prisma/client';

import { ActionState } from '@/lib/create-safe-action';
import { DeleteCard } from './scheme';

export type InputType = z.infer<typeof DeleteCard>;
export type ReturnType = ActionState<InputType, Card>;
