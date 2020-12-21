
import {Arg, Field, InputType, Mutation, Query, Resolver} from 'type-graphql'
import Video from './Video'
import VideoSchema from '../../model/VideoSchema'


@InputType() 
class VideoType {
  @Field()
  name: string;
  @Field()
  description: string
  @Field()
  category: string
}


@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const  videos = await VideoSchema.find()
    return videos
  }

  @Mutation(() => Video)
  async createVideos(@Arg('videoInput') videoInput: VideoType) {
    const video = await VideoSchema.create<VideoType>(videoInput);
    return video;
  }
}

export default VideoResolver