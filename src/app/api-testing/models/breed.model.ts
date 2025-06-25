export interface BreedsModel {
	id: string
	type: string
	attributes: AttributesModel
	relationships: RelationshipsModel
}

export interface AttributesModel {
  name: string
  description: string
  life: LifeModel
  male_weight: MaleWeightModel
  female_weight: FemaleWeightModel
  hypoallergenic: boolean
}

export interface LifeModel {
  max: number
  min: number
}

export interface MaleWeightModel {
  max: number
  min: number
}

export interface FemaleWeightModel {
  max: number
  min: number
}

export interface RelationshipsModel {
  group: GroupModel
}

export interface GroupModel {
  data: DataModel
}

export interface DataModel {
  id: string
  type: string
}
