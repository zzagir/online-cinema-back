import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCountOpenedDto {
	@IsNotEmpty()
	slug: string
}
