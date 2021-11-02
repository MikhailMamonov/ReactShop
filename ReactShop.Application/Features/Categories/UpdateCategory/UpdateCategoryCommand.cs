using MediatR;

namespace ReactShop.Application.Features.Categories.UpdateCategory
{
    public class UpdateCategoryCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
