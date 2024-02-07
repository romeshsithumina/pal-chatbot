"use server";

import prisma from "@/lib/prismadb";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";

export async function createUser(params: CreateUserParams) {
  const { clerkId, name, email, pictureURL } = params;
  const newUser = await prisma.user
    .create({
      data: {
        clerkId,
        name,
        email,
        pictureURL,
      },
    })
    .catch(async (e: any) => {
      console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return newUser;
}

export async function updateUser(params: UpdateUserParams) {
  const { clerkId, name, email, pictureURL } = params;
  const updatedUser = await prisma.user
    .update({
      where: {
        clerkId,
      },
      data: {
        name,
        email,
        pictureURL,
      },
    })
    .catch(async (e: any) => {
      console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return updatedUser;
}

export async function deleteUser(params: DeleteUserParams) {
  const { clerkId } = params;
  const deletedUser = await prisma.user
    .delete({
      where: { clerkId },
    })
    .catch(async (e: any) => {
      console.log(e);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return deletedUser;
}
