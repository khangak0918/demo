

function Post({ post }) {
    return (
        <div className="md:w-4/5 lg:w-4/5 mb-4 ml-2">
              <img
                className="rounded hover:border-white-thin p-1 hover:bg-gray-100"
                style={{ width: "100%", height: "170px", objectFit: "cover" }}
                src={post.image}
                alt=""
              />
              <h4 className="mt-3">{post.infomation} </h4>
              <p className="font-thin line-clamp-1 text-stone-400">{post.time}</p>
        </div>
    )
}

export default Post;