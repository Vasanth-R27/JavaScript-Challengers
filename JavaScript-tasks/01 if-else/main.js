// if-else

// Mobile's battery percentage remainder

const batteryPercent = "47%";

if (batteryPercent >= "51%" || batteryPercent == "100%") {
  console.log("Your battery is fully charged");
} else if (batteryPercent <= "50%") {
  console.log(
    "Less than 50% of the remaining. Turn on the battery saver to save power"
  );
}
