using FluentValidation;

namespace ReactShop.Application.Features.ShoppingCarts.CreateShoppingCart
{
    public class CreateShoppingCartCommandValidator : AbstractValidator<CreateShoppingCartCommand>
    {
        public CreateShoppingCartCommandValidator()
        {
            RuleFor(c => c.UserId).NotEmpty().WithMessage("Please specify UserId");
        }
    }
}