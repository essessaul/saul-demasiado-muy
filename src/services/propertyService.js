import { properties } from "../data/mockData";
import { supabase } from "../lib/supabaseClient";

function rangesOverlap(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}

function isAvailableForDates(property, checkIn, checkOut) {
  if (!checkIn || !checkOut) return true;
  const requestedStart = new Date(checkIn);
  const requestedEnd = new Date(checkOut);

  return !(property.unavailableRanges || []).some((range) => {
    const rangeStart = new Date(range.start);
    const rangeEnd = new Date(range.end);
    return rangesOverlap(requestedStart, requestedEnd, rangeStart, rangeEnd);
  });
}

export async function getProperties() {
  if (supabase) {
    const { data, error } = await supabase.from("properties").select("*").order("name");
    if (!error && data?.length) return data;
  }
  return properties;
}

export async function getPropertyBySlug(slug) {
  if (supabase) {
    const { data, error } = await supabase.from("properties").select("*").eq("slug", slug).single();
    if (!error && data) return data;
  }
  return properties.find((property) => property.slug === slug) || null;
}

export async function searchAvailableProperties({ checkIn, checkOut, guests }) {
  const allProperties = await getProperties();
  const guestCount = Number(guests || 0);

  return allProperties.filter((property) => {
    const matchesGuests = guestCount ? Number(property.guests) >= guestCount : true;
    const matchesDates = isAvailableForDates(property, checkIn, checkOut);
    return matchesGuests && matchesDates;
  });
}
