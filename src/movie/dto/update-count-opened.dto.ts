import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCountOpenedDto {
	@IsNotEmpty()
	@IsString()
	slug: string
}
