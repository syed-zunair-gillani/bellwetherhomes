// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
        S.listItem()
        .title('Home Page')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home') // Ensure a single 'home' document
        ),
        
      // Include other documents (exclude these to prevent listing them twice)
      ...S.documentTypeListItems().filter(item => 
        !["home"].includes(item.getId())
      ),
    ]);