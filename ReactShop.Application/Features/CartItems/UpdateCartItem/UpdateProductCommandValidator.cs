using FluentValidation;

namespace ReactShop.Application.Features.CartItems.UpdateCartItem
{
    public class UpdateCartItemCommandValidator : AbstractValidator<UpdateCartItemCommand>
    {
        public UpdateCartItemCommandValidator()
        {
            RuleFor(c => c.ShoppingCartId).NotEmpty().WithMessage("Please specify CartId");
            RuleFor(c => c.ProductId).NotEmpty().WithMessage("Please specify ProductId");
        }
    }
}