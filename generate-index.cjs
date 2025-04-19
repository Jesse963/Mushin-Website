// Script to generate summary of case studies and output _index.json
// Used in case-stuides route to display options
const fs = require("fs");
const path = require("path");

// --- Configuration ---
const contentDir = path.join(
  __dirname,
  "src",
  "pages",
  "Case Studies",
  "Content"
); // Assumes script is run from project root, content is in src/content
const outputFile = path.join(contentDir, "_index.json");
const indexFileName = "_index.json"; // The name of the index file itself, to exclude it

// Fields to include in the index summary for each case study
const summaryFields = [
  "slug", // Will be derived from filename
  "title",
  "clientName",
  "industry",
  "datePublished",
  "imageUrl",
  "imageAlt",
  "summary",
  "tags", // Include tags if you want to filter by them later
];
// ---------------------

console.log(`Starting index generation for directory: ${contentDir}`);

let indexData = [];

try {
  // Read all files in the content directory
  const files = fs.readdirSync(contentDir);

  console.log(`Found ${files.length} items in directory.`);

  // Filter for .json files and exclude the index file itself
  const caseStudyFiles = files.filter(
    (file) =>
      path.extname(file).toLowerCase() === ".json" && file !== indexFileName
  );

  console.log(`Processing ${caseStudyFiles.length} JSON case study files...`);

  // Loop through each case study file
  caseStudyFiles.forEach((file) => {
    const filePath = path.join(contentDir, file);
    const slug = path.parse(file).name; // Get filename without extension as slug

    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileContent);

      // Create summary object, only including specified fields
      const summaryData = {};
      summaryFields.forEach((field) => {
        if (field === "slug") {
          summaryData[field] = slug;
        } else if (data.hasOwnProperty(field)) {
          ``;
          summaryData[field] = data[field];
        } else {
          // Optionally add null or default value if a field is missing
          // console.warn(`Field "${field}" missing in file: ${file}`);
          // summaryData[field] = null;
        }
      });

      indexData.push(summaryData);
      console.log(`  - Processed: ${file}`);
    } catch (parseError) {
      console.error(`Error parsing JSON file: ${file}`, parseError);
    }
  });

  // Sort index data if needed (e.g., by date)
  // indexData.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished)); // Example sort descending

  // Write the index array to the output file
  fs.writeFileSync(outputFile, JSON.stringify(indexData, null, 2), "utf-8"); // Using 2 spaces for indentation

  console.log(`\nSuccessfully generated index file: ${outputFile}`);
  console.log(`Total case studies indexed: ${indexData.length}`);
} catch (error) {
  console.error("\nError during index generation:", error);
  process.exit(1); // Exit with error code
}
