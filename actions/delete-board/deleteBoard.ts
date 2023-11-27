'use server';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteBoard(id: string) {
  await prisma.board.delete({
    where: {
      id,
    },
  });

  revalidatePath('organization/org_2YfCRIHMMKrLr8lmb3um3ahCuIU');
}
