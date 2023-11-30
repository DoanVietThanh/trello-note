import { z } from 'zod';
import { Card } from '@prisma/client';

import { ActionState } from '@/lib/create-safe-action';
import { CopyCard } from './scheme';

export type InputType = z.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputType, Card>;
