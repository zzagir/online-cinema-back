import { Module } from '@nestjs/common'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'
import { MovieModel } from './movie.model'
import { TypegooseModule } from 'nestjs-typegoose'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MovieModel,
				schemaOptions: {
					collection: 'movie',
				},
			},
		]),
	],
	controllers: [MovieController],
	providers: [MovieService],
})
export class MovieModule {}