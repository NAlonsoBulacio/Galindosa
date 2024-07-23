import { GET_PROJECTS, GET_PROJECTS_ID, EMPTY} from "./actions";

const initialState = {
  projects: [],
  detail:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
     
      const cleanProjects = action.payload.map(project => ({
        id: project.id,
        name: project.name,
        slug: project.slug,
        status: project.status,
        img: project.img,
        description: project.description,
        zone: project.zone,
        surface: project.surface,
        rooms: project.rooms,
        presentImages: project.present_images,
        carouselImages: project.carousel_images,
        latitude: project.latitude,
        longitude: project.longitude,
        amenities: project.amenities,
        address: project.address,
        introDescription: project.intro_description,
        initDate: project.init_date,
        finishedDate: project.finished_date,
        unitsVailable: project.units_vailable,
        totalUnits: project.total_units,
        characteristics: project.characteristics,
        video: project.video,
      }))
     
      return { ...state, projects: cleanProjects };
      case GET_PROJECTS_ID:
        const cleanProject = {
          id: action.payload.id,
          name: action.payload.productName,
          type: action.payload.type,
          img: action.payload.images,
          description: action.payload.description,
          year: action.payload.year,
          surface: action.payload.surface,
        }
        return{...state, detail: cleanProject};
        case EMPTY: 
        return {...state, detail: []};
      default:
        return{...state};
  }
};

export default reducer;
