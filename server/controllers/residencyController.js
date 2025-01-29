import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    image,
    facilities,
    userEmail,
  } = req.body.data;
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });
    res
      .status(201)
      .json({ message: "Residency created successfully", data: residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A Residency with same address already exists.");
    }
    throw new Error(err.message);
  }
});

export const getAllResidency = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(residencies);
  } catch (err) {
    throw new Error(err.message);
  }
});

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const residency = await prisma.residency.findUnique({ where: { id } });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you." });
    } else {
      await prisma.user.update({
        where: { email },
        data: { bookedVisits: { id, date } },
      });
    }
    res.send("Residency booked successfully.");
  } catch (err) {
    throw new Error(err.message);
  }
});
