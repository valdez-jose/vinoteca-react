
import type { Vino } from "../types/Vino";

const API_URL = "https://vinoteca-api-rest.onrender.com";

export async function obtenerVinos(): Promise<Vino[]> {
  const response = await fetch(`${API_URL}/vinos`);

  if (!response.ok) {
    throw new Error("Error al obtener los vinos");
  }

  return response.json();
}

export async function crearVino(vino: Omit<Vino, "id">): Promise<Vino> {
  const response = await fetch(`${API_URL}/vinos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vino),
  });

  if (!response.ok) {
    throw new Error("Error al crear el vino");
  }

  return response.json();
}

export async function actualizarVino(
  id: number,
  vino: Omit<Vino, "id">
): Promise<Vino> {
  const response = await fetch(`${API_URL}/vinos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vino),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el vino");
  }

  return response.json();
}

export async function obtenerVinoPorId(id: number): Promise<Vino> {
  const response = await fetch(`${API_URL}/vinos/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el vino");
  }

  return response.json();
}

export async function eliminarVino(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/vinos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el vino");
  }
}