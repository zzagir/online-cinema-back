import { Module } from '@nestjs/common'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'
import { MovieModel } from './movie.model'
import { TypegooseModule } from 'nestjs-typegoose'

@Module({
	controllers: [MovieController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MovieModel,
				schemaOptions: {
					collection: 'Movie',
				},
			},
		]),
	],
	providers: [MovieService],
	exports: [MovieService],
})
export class MovieModule {}
