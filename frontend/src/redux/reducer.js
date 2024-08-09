import { GET_PROJECTS, GET_PROJECTS_ID, EMPTY } from "./actions";
import { amenities } from "../utils";

const initialState = {
  projects: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      const cleanProjects = action.payload.map((project) => {
        const cleanAmenities = [];

        project.amenities.forEach((id) => {
          const amenity = amenities.find((amenity) => amenity.id.toString() === id.toString());
          if (amenity && !cleanAmenities.some((a) => a.id === amenity.id)) {
            cleanAmenities.push(amenity);
          }
        });


        const cleanSections = project.sections.map((section) => {
          const sectionAmenities = section.amenities.map((amenityName) => {
            return amenities.find((amenity) => amenity.label === amenityName);
          });

          return {
            ...section,
            amenities: sectionAmenities.filter((amenity) => amenity), 
          };
        });

        return {
          id: project.id,
          name: project.name,
          slug: project.slug,
          status: project.status,
          categories: project.categories,
          img: project.img,
          description: project.description,
          zone: project.zone,
          surface: project.surface,
          rooms: project.rooms,
          presentImages: project.present_images,
          carouselImages: project.present_images,
          latitude: project.latitude,
          longitude: project.longitude,
          amenities: cleanAmenities,
          address: project.address,
          introDescription: project.intro_description,
          initDate: project.init_date,
          finishedDate: project.finished_date,
          unitsVailable: project.units_available,
          totalUnits: project.total_units,
          characteristics: project.characteristics,
          video: project.video,
          sections: cleanSections,
          blueprints: project.blueprints,
        };
      });

      return { ...state, projects: cleanProjects };

    case GET_PROJECTS_ID:
      const projectAmenities = action.payload.amenities.map((id) => {
        return amenities.find((amenity) => amenity.id === id);
      });

      const cleanProject = {
        id: action.payload.id,
        name: action.payload.productName,
        type: action.payload.type,
        img: action.payload.images,
        description: action.payload.description,
        year: action.payload.year,
        surface: action.payload.surface,
        amenities: projectAmenities,
      };
      return { ...state, detail: cleanProject };

    case EMPTY:
      return { ...state, detail: [] };

    default:
      return { ...state };
  }
};

export default reducer;
